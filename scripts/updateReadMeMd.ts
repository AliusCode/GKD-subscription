import fs from 'node:fs/promises';
// 添加内容
import path from 'node:path';
// 添加内容

// 从 README.md 中解析出 GROUP_SIZE、GLOBALGROUP_SIZE 和 VERSION 的值
const parseReadMeMd = async () => {
  const readmePath = process.cwd() + '/dist/README.md';
  const readmeContent = await fs.readFile(readmePath, 'utf-8');

  // 使用正则表达式匹配需要的值
  const groupSizeMatch = readmeContent.match(/\|应用规则\|(\d+)\|/);
  const globalGroupSizeMatch = readmeContent.match(/\|全局规则\|(\d+)\|/);
  const appSizeMatch = readmeContent.match(/\|应用\|(\d+)\|/);
  const versionMatch = readmeContent.match(/v(\d+)/);

  const APP_SIZE = appSizeMatch ? appSizeMatch[1] : '';
  const GROUP_SIZE = groupSizeMatch ? groupSizeMatch[1] : '';
  const GLOBALGROUP_SIZE = globalGroupSizeMatch ? globalGroupSizeMatch[1] : '';
  const VERSION = versionMatch ? versionMatch[1] : '';

  // 添加内容
  // 原仓库应用总数
  const APP_TOTAL = '886';
  // 筛后剩余应用数
  const appDirPath = path.join(process.cwd(), 'src/app');
  const dirEntries = await fs.readdir(appDirPath, { withFileTypes: true });
  const APP_RESIDUE = dirEntries
    .filter((entry) => entry.isFile())
    .length.toString();
  // 已筛选应用数量
  const APP_SELECT = (parseInt(APP_TOTAL) - parseInt(APP_RESIDUE)).toString();
  // 删除的应用数量
  const APP_DELETE = (parseInt(APP_SELECT) - parseInt(APP_SIZE)).toString();
  // 添加内容

  return {
    APP_TOTAL,
    APP_SELECT,
    APP_RESIDUE,
    APP_DELETE,
    APP_SIZE,
    GROUP_SIZE,
    GLOBALGROUP_SIZE,
    VERSION,
  };
};

// 更新 README.md 的模板内容并写入文件
export const updateReadMeMd = async () => {
  const {
    APP_TOTAL,
    APP_SELECT,
    APP_RESIDUE,
    APP_DELETE,
    APP_SIZE,
    GROUP_SIZE,
    GLOBALGROUP_SIZE,
    VERSION,
  } = await parseReadMeMd();

  const mdTemplatePath = process.cwd() + '/Template.md';
  const readmeMdPath = process.cwd() + '/README.md';

  // 读取模板文件
  const mdTemplate = await fs.readFile(mdTemplatePath, 'utf-8');

  // 替换模板中的占位符
  const readMeMdText = mdTemplate
    .replaceAll('--APP_SIZE--', APP_SIZE)
    .replace('--GROUP_SIZE--', GROUP_SIZE)
    .replace('--GLOBALGROUP_SIZE--', GLOBALGROUP_SIZE)
    .replaceAll('--VERSION--', VERSION)
    .replace('--APP_TOTAL--', APP_TOTAL)
    .replace('--APP_SELECT--', APP_SELECT)
    .replace('--APP_RESIDUE--', APP_RESIDUE)
    .replace('--APP_DELETE--', APP_DELETE);

  // 写入 README.md 文件
  await fs.writeFile(readmeMdPath, readMeMdText);
};
