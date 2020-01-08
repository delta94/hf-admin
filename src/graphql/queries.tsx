import gql from 'graphql-tag';

export const GET_USERINFO = gql`
  {
    me {
      email
      nickname
      openImageChoice
      levelOf3Dae
      messageToFriend
      motivations {
        id
        motivation
      }
      weekdays {
        id
        weekday
      }
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      id
      email
      provider
      gender
      nickname
      levelOf3Dae
      motivations {
        id
        motivation
      }
      weekdays {
        id
        weekday
      }
      createdAt
      messageToFriend
    }
  }
`;

export const MUTATE_INFO = gql`
  mutation PostInfo(
    $nickname: String!
    $openImageChoice: OpenImageChoice!
    $levelOf3Dae: LevelOf3Dae!
    $messageToFriend: String
  ) {
    me(
      messageToFriend: $messageToFriend
      nickname: $nickname
      openImageChoice: $openImageChoice
      levelOf3Dae: $levelOf3Dae
    ) {
      messageToFriend
    }
  }
`;

export const SET_MOTIVATION = gql`
  mutation SetMotivation($input: [MotivationEnum]) {
    setMotivation(input: $input) {
      motivation
    }
  }
`;

export const SET_EXERCISE_ABLE_DAYS = gql`
  mutation SetExerciseAbleDay($input: [WeekdayEnum]) {
    setExerciseAbleDay(input: $input) {
      weekday
    }
  }
`;
