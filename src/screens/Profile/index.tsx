import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {HeaderProfile} from '../../components/HeaderProfile';
import {ActionButton} from './components/ActionButton';
import * as S from './styles';

export const Profile: React.FC = () => {
  const posts = [1];
  const navigation = useNavigation();

  const handleGoSettings = () => {
    navigation.navigate('SettingsStack');
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderProfile />
      <S.InfoContainer>
        <S.InfoWrapper>
          <S.Info>10</S.Info>
          <S.NameInfo>Posts</S.NameInfo>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Info>1.270</S.Info>
          <S.NameInfo>Likes</S.NameInfo>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Info>17</S.Info>
          <S.NameInfo>Saves</S.NameInfo>
        </S.InfoWrapper>
      </S.InfoContainer>
      <S.ActionsContainer>
        <ActionButton
          iconName="settings"
          name="Settings"
          onPress={handleGoSettings}
        />
        <ActionButton iconName="logout" name="Log out" />

        <S.LastPostContainer>
          <S.TitleSection>Last Post</S.TitleSection>
          {posts.length > 0 ? (
            <S.LastPostWrapper>
              <S.LastPostImageWrapper
                resizeMode="contain"
                source={{
                  uri: 'https://felipearon.com.br/wp-content/uploads/2019/10/dominando-react-native-380x249.png',
                }}
              />
              <S.LastPostInfoWrapper>
                <S.TitlePost>React Native is Biggest</S.TitlePost>
                <S.DescriptionPost>
                  Framework frontend mobile created by Facebook developers.
                </S.DescriptionPost>
              </S.LastPostInfoWrapper>
            </S.LastPostWrapper>
          ) : (
            <S.EmptyPostWrapper>
              <S.MaterialIcons name="mood-bad" size={35} />
              <S.EmptyPostDescription>
                Hey, is it empty? Hmm, looks like you haven't posted anything
                yet, I'm upset with you!
              </S.EmptyPostDescription>
            </S.EmptyPostWrapper>
          )}
        </S.LastPostContainer>
      </S.ActionsContainer>
    </S.Container>
  );
};
