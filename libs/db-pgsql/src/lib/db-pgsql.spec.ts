import { dbPgsql } from './db-pgsql';

describe('dbPgsql', () => {
  it('should work', () => {
    expect(dbPgsql()).toEqual('db-pgsql');
  });
});
