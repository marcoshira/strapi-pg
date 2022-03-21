module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-34-238-37-113.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd8p4lp0olqjifr'),
      user: env('DATABASE_USERNAME', 'rpmxuitbbimzua'),
      password: env('DATABASE_PASSWORD', 'bae2b6930b4a47e08c6b1d6384f8dd7bebfdf203f1f0d0477f4f0d122465fa58'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
