const TAG_ALIASES: Record<string, string> = {
  nodejs: 'Node.js',
  'node.js': 'Node.js'
};

export function normalizeTag(tag: string) {
  const normalizedTag = tag.trim().toLowerCase();

  return TAG_ALIASES[normalizedTag] ?? tag.trim();
}

export function tagPath(tag: string) {
  return `/tags/${encodeURIComponent(normalizeTag(tag).toLowerCase())}`;
}

export function tagsMatch(input: string, tag: string) {
  return normalizeTag(input).toLowerCase() === normalizeTag(tag).toLowerCase();
}
