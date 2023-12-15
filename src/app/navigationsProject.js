
/* Systematic literature review - Tool for researchers */
export const navigationsProject = [
  { name: '#Name Project', icon: 'book', path: '/projects/new' },
  { label: 'Steps', type: 'label' },
  {
    name: 'Planning',
    icon: 'playlist_add_check',
    children: [
      { name: 'General', path: '/projects/new/planning' },
      { name: 'Review protocol', path: '/projects/new/planning' },
      { name: 'Quality criteria', path: '/projects/new/planning' },
      { name: 'Timeline', path: '/projects/new/planning' },
    ]
  },
  {
    name: 'Conducting',
    icon: 'assignment',
    children: [
      { name: 'Search', path: '/projects/new/conducting' },
      { name: 'Selection', path: '/projects/new/conducting' },
      { name: 'Data extraction', path: '/projects/new/conducting' },
      { name: 'Quality assessment', path: '/projects/new/conducting' },
      { name: 'Data analysis', path: '/projects/new/conducting' },
    ]
  },
  {
    name: 'Presentation',
    icon: 'assignment_turned_in',
    children: [
      { name: 'Results', path: '/projects/new/presentation' },
      { name: 'Visualization', path: '/projects/new/presentation' },
      { name: 'Export', path: '/projects/new/presentation' },
    ]
  },
  { label: 'Communication', type: 'label' },
  { name: 'Chat', icon: 'chat', path: '/projects/new/chat' },
  { name: 'Files', icon: 'folder', path: '/projects/new/files' },
  { name: 'Kanban', icon: 'view_column', path: '/projects/new/kanban' },
  
];
