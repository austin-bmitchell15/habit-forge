import { fetchAuthSession } from 'aws-amplify/auth';

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
}

export default new UserService();
