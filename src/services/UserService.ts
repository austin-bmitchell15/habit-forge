import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from 'aws-amplify/auth';

class UserService {
  async getUserToken() {
    try {
      return (
        (await fetchAuthSession()).tokens?.idToken?.toString() || undefined
      );
    } catch (err) {
      console.log(err);
    }
  }
  async getUserName() {
    try {
      return (await fetchUserAttributes()).given_name || undefined;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UserService();
