import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor};
  border-radius: 4px;
  padding: 0 12px;
  margin-left: 10px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const HoldingContent = styled.TouchableHighlight`
  flex-basis: 0;
  flex-grow: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 20px;
`;
export const User = styled.View`
  align-items: center;
  margin: 0 0px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 36px;
`;
export const ProfileButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const TextHelp = styled.Text`
  font-size: 10px;
  color: #333;
  text-align: center;
`;
