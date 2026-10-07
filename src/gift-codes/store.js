import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'data', 'gift-codes.json');

/** 读取 data/gift-codes.json。维护礼包码时直接改这个文件。 */
export function readGiftCodeDocument() {
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const codes = Array.isArray(parsed.codes) ? parsed.codes : [];
  return {
    ok: true,
    version: Number(parsed.version) || 0,
    updatedAt: Number(parsed.updatedAt) || 0,
    count: codes.length,
    codes
  };
}
