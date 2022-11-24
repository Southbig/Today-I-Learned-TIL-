//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'zeus' && password === 'king') ||
        (id === 'south' && password === 'big')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'zeus') {
        onSuccess({ name: 'zeus', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = promt('enter your id');
const password = promt('enter your password');
UserStorage.loginUser(
  id,
  password,
  user => {
    UserStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

//Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'zeus' && password === 'king') ||
          (id === 'south' && password === 'big')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'zeus') {
          resolve({ name: 'zeus', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}
//Callback Hell example
const UserStorage = new UserStorage();
const id = promt('enter your id');
const password = promt('enter your password');
UserStorage.loginUser(
  id,
  password,
  user => {
    UserStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

//Promise
// const UserStorage = new UserStorage();
// const id = promt('enter your id');
// const password = promt('enter your password');

userStorage.loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(user => {
    alert(`Hello ${user.name}, you have a ${user.role} role`);
  })
  .catch(error => console.log(error))