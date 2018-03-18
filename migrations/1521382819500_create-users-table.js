exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'UUID',
      primaryKey: true,
      default: pgm.func('uuid_generate_v1mc()')
    },
    secret: {
      type: 'VARCHAR(255)',
      notNull: true
    },
    inserted_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('NOW()')
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('NOW()')
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
