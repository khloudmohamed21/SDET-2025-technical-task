const request = require('supertest');
const api = request('http://localhost:3000');

let savedEmail = '';
let savedPassword = '';
let savedToken = '';

// Function to generate dynamic user data
function generateUserData() {
  const timestamp = Date.now();
  return {
    email: `user+${timestamp}@gmail.com`,
    password: `pass${timestamp}`,
    name: `user${timestamp}`
  };
}

// ==================== CREATE USER ====================
describe('Create User API - POST /api/v1/users', () => {

  test('Valid body => should register user successfully', async () => {
    const userData = generateUserData();
    const res = await api.post('/api/v1/users')
      .send(userData)
      .expect(res => {
        expect([200, 201]).toContain(res.status);
        expect(res.body.message).toBe('User registered with success');
      });

    savedEmail = userData.email;
    savedPassword = userData.password;
  });

  //expected to fail (Loged Bug)
  test('Valid body => should return token (according to documentation)', async () => {
    const userData = generateUserData();
    const res = await api.post('/api/v1/users')
      .send(userData)
      .expect([200, 201]);
    
    expect(res.body).toHaveProperty('token');
  });

  test('Invalid body - missing email => should return 401', async () => {
    const userData = generateUserData();
    const res = await api.post('/api/v1/users')
      .send({ name: userData.name, password: userData.password })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

  test('Invalid body - missing password => should return 401', async () => {
    const userData = generateUserData();
    const res = await api.post('/api/v1/users')
      .send({ name: userData.name, email: userData.email })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

test('Invalid body - missing email and password => should return 401', async () => {
  const res = await api.post('/api/v1/users')
    .send({
      name: `user_${Date.now()}`
    })
    .expect(401);

  expect(res.body).toHaveProperty('message');
});

test('Invalid body - missing all fields => should return 401', async () => {
  const res = await api.post('/api/v1/users')
    .send({})
    .expect(401);

  expect(res.body).toHaveProperty('message');
});


});

// ==================== AUTHENTICATION ====================
describe('Authenticate User API - POST /api/v1/auth', () => {

  test('Valid credentials => should return token', async () => {
    const res = await api.post('/api/v1/auth')
      .send({ email: savedEmail, password: savedPassword })
      .expect(200);
    expect(res.body).toHaveProperty('token');
      savedToken = res.body.token; 

  });

  //expected to fail (Loged Bug)
  test('Invalid body - missing email => should return 401', async () => {
    const res = await api.post('/api/v1/auth')
      .send({ password: savedPassword })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

  //Invalid mail with empty string
    test('Invalid body - empty string => should return 401', async () => {
    const res = await api.post('/api/v1/auth')
      .send({ email:"",password: savedPassword })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

  test('Invalid body - missing password => should return 401', async () => {
    const res = await api.post('/api/v1/auth')
      .send({ email: savedEmail })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

  test('Invalid credentials => wrong password should return 401', async () => {
    const res = await api.post('/api/v1/auth')
      .send({ email: savedEmail, password: 'wrongpassword' })
      .expect(401);
    expect(res.body).toHaveProperty('message');
  });

  // ==================== GET USER INFO BY TOKEN ====================
 
test('GET /api/v1/users with valid token => should return user info', async () => {
  const res = await api.get('/api/v1/users')
    .set('Authorization', savedToken)  
    .expect(200);

  expect(res.body).toHaveProperty('id', expect.any(Number));
  expect(res.body).toHaveProperty('name', expect.any(String));
  expect(res.body).toHaveProperty('email', savedEmail);
  expect(res.body).toHaveProperty('imageUrl', expect.any(String));


});

test('GET /api/v1/users with invalid token => should return 403 Forbidden', async () => {
  const res = await api.get('/api/v1/users')
    .set('Authorization', 'invalidtoken123')
    .expect(403);

  expect(res.body).toHaveProperty('message');
});

});

// ==================== UPDATE USER ====================

describe('Update User API - PATCH /api/v1/users', () => {

  test('Valid token & valid body => should update user successfully', async () => {
    const res = await api.patch('/api/v1/users')
      .set('Authorization', savedToken)
      .send({
        name: 'updatedName',
        email: `updated_${Date.now()}@gmail.com`,
        password: 'newpassword123'
      })
      .expect(200);

    expect(res.body).toHaveProperty('message', 'User updated with success!');
  });

  test('Missing token => should return 403 "Forbidden', async () => {
    const res = await api.patch('/api/v1/users')
      .send({
        name: 'updatedName',
        email: `updated_${Date.now()}@gmail.com`,
        password: 'newpassword123'
      })
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

  test('Invalid token => should return 403 Forbidden', async () => {
    const res = await api.patch('/api/v1/users')
      .set('Authorization', 'invalidtoken123')
      .send({
        name: 'updatedName',
        email: `updated_${Date.now()}@gmail.com`,
        password: 'newpassword123'
      })
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

  test('Invalid email format => should return  403 "Forbidden', async () => {
    const res = await api.patch('/api/v1/users')
      .set('Authorization', savedToken)
      .send({
        name: 'updatedName',
        email: 'invalidEmail',
        password: 'newpassword123'
      })
      .expect(403);

  });

  test('Empty body => should return 403 "Forbidden', async () => {
    const res = await api.patch('/api/v1/users')
      .set('Authorization', savedToken)
      .send({})
      .expect(403);

  });

});

// ==================== DELETE USER ====================

//"message": "Unauthorized to delete" issue with the test case
  //expected to fail (Loged Bug)

describe('Delete User API - DELETE /api/v1/users', () => {

  test('Valid token => should delete user successfully', async () => {
    const res = await api.delete('/api/v1/users')
      .set('Authorization', savedToken)
      .expect(200);

    expect(res.body).toHaveProperty('message', 'User deleted with success');
  });

  test('Missing token => should return 403 Forbidden', async () => {
    const res = await api.delete('/api/v1/users')
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

  test('Invalid token => should return 403 Forbidden', async () => {
    const res = await api.delete('/api/v1/users')
      .set('Authorization', 'invalidtoken123')
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

});

// ==================== DELETE ALL USERS ====================

describe('Delete All Users API - DELETE /api/v1/all-users', () => {

  test('Valid admin key => should delete all users successfully', async () => {
    const res = await api.delete('/api/v1/all-users')
      .send({ key_admin: 'keyadmin123' }) 
      .expect(200);

    expect(res.body).toHaveProperty('message', 'Users deleted with success');
  });

  test('Missing admin key => should return 403 Forbidden', async () => {
    const res = await api.delete('/api/v1/all-users')
      .send({})
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

  test('Invalid admin key => should return 403 Forbidden', async () => {
    const res = await api.delete('/api/v1/all-users')
      .send({ key_admin: 'wrongkey123' })
      .expect(403);

    expect(res.body).toHaveProperty('message');
  });

});




