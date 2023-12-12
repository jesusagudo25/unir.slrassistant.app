export const navigationsProject = [
  { name: '#Name Project', icon: 'book', path: '/projects/new' },
  { label: 'Steps', type: 'label' },
  {
    name: 'Planning',
    icon: 'playlist_add_check',
    children: [
      { name: 'Planning', path: '/projects/new/planning' },
      { name: 'Planning', path: '/projects/new/planning' },
      { name: 'Planning', path: '/projects/new/planning' },
    ]
  },
  {
    name: 'Presentation',
    icon: 'slideshow',
    children: [
      { name: 'Presentation', path: '/projects/new/presentation' },
      { name: 'Presentation', path: '/projects/new/presentation' },
      { name: 'Presentation', path: '/projects/new/presentation' },
    ]
  },
  {
    name: 'Execution',
    icon: 'build',
    children: [
      { name: 'Execution', path: '/projects/new/execution' },
      { name: 'Execution', path: '/projects/new/execution' },
      { name: 'Execution', path: '/projects/new/execution' },
    ]
  },
  { label: 'Support', type: 'label' },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: ''
  },
];
