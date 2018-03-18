exports.up = (pgm) => {
  pgm.createTable('access_tokens', {
    id: {
      type: 'UUID',
      primaryKey: true,
      default: pgm.func('uuid_generate_v1mc()')
    },
    user_id: {
      type: 'UUID',
      notNull: true,
      references: 'users',
      onDelete: 'CASCADE'
    },
    token: {
      type: 'VARCHAR(255)',
      notNull: true,
      unique: true
    },
    expires_at: {
      type: 'timestamp',
      notNull: true
    },
    valid: {
      type: 'boolean',
      notNull: true,
      default: true
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
  pgm.dropTable('access_tokens');
};
