import React, { Component } from 'react';
import { Keyboard, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
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
  HoldingContent,
  TextHelp,
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

  async componentDidMount() {
    const usersString = await AsyncStorage.getItem('users');

    if (usersString !== 'null') {
      this.setState({ users: JSON.parse(usersString) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleRemove = user => {
    Alert.alert(
      'Excluir',
      'Você tem certeza que quer excluir este usuário de sua lista?',
      [
        { text: 'Não, foi mal', onPress: () => {} },
        {
          text: 'Sim, quero',
          onPress: () => {
            const { users } = this.state;

            if (!users.length) {
              return;
            }

            const usersNew = users.filter(u => u.login !== user.login);
            AsyncStorage.setItem('users', JSON.stringify(usersNew));
            this.setState({ users: usersNew });
          },
        },
      ]
    );
  };

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
      console.log(e);
      this.setState({ loading: false, error: true });

      setTimeout(() => {
        this.setState({ error: false });
      }, 1500);
    }
  };

  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
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
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name={icon} size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        <TextHelp>Segure para excluir</TextHelp>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <HoldingContent
              onLongPress={() => this.handleRemove(item)}
              onPress={() => this.handleNavigate(item)}
              underlayColor="white"
            >
              <User>
                <Avatar source={{ uri: item.avatar }} />
                <Name>{item.name}</Name>
                <ProfileButton onPress={() => this.handleNavigate(item)}>
                  <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
              </User>
            </HoldingContent>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários favoritos do Git',
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
