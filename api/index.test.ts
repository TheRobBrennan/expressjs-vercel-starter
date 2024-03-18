import { describe, it, expect } from 'vitest';
import reExportedServer from './index';
import originalServer from '../src/server';

describe('API Index Exports', () => {
  it('should re-export the same server instance as src/server', () => {
    expect(reExportedServer).toBe(originalServer);
  });
});
