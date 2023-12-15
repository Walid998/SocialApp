export const seederConfig = {
  services: [
    {
      path: 'users',
      template: {
        username: '{{username}}'
      },
      count: 10
    },
  ],
};
