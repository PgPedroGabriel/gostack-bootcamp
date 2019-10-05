import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Avatar, Name, Container, User as UserStyle } from '../Main/styles';
import { Stars, Starred, OwnerAvatar, Info, Title, Author } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  constructor() {
    super();
    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;

    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <UserStyle>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
        </UserStyle>
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
