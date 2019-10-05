import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  ProfileButton,
  ProfileButtonText,
  Name,
} from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
      loading: false,
      success: false,
      error: false,
    };
  }

  handleButton = async () => {
    const { newUser, users, loading } = this.state;

    if (newUser === '' || loading) {
      return;
    }

    this.setState({ loading: true });
    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        newUser: '',
        users: [...users, data],
        loading: false,
        success: true,
      });

      setTimeout(() => {
        this.setState({ success: false });
      }, 1500);

      Keyboard.dismiss();
    } catch (e) {
      this.setState({ loading: false, error: true });

      setTimeout(() => {
        this.setState({ error: false });
      }, 1500);
    }
  };

  render() {
    const { newUser, users, loading, success, error } = this.state;
    let color;
    let icon;

    if (success) {
      color = '#2ecc71';
      icon = 'done';
    } else if (error) {
      color = '#e74c3c';
      icon = 'error';
    } else {
      icon = loading ? 'access-time' : 'add';
      color = '#7159c1';
    }

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Adicionar usuário do github"
            onChangeText={text => {
              this.setState({ newUser: text });
            }}
            value={newUser}
            returnKeyType="send"
            onSubmitEditing={this.handleButton}
          />
          <SubmitButton
            disabled={loading}
            bgColor={color}
            onPress={this.handleButton}
          >
            <Icon name={icon} size={20} color="#FFF" />
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários favoritos do Git',
};
