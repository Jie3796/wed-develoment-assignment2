// register / log in
Mock.mock('/register', 'post', {
  success: true,
  message: 'register successfully'
});

Mock.mock('/api/login', 'post', {
  id: '@id',
  username: '@first',
  email: '@email'
});