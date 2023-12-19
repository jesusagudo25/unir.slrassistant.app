
/* Systematic literature review - Tool for researchers */
export const navigationsProject = (id) => {
  return [
    { name: `#Name Project`, icon: `book`, path: `/projects/${id}` },
    {
      name: `Planning`,
      icon: `playlist_add_check`,
      children: [
        { name: `General`, path: `/projects/${id}/general` },
        { name: `Review protocol`, path: `/projects/${id}/review-protocol` },
        { name: `Timeline`, path: `/projects/${id}/timeline` },
      ]
    },
    {
      name: `Conducting`,
      icon: `assignment`,
      children: [
        { name: `Search`, path: `/projects/${id}/search` },
        { name: `Selection`, path: `/projects/${id}/selection` },
        { name: `Data extraction`, path: `/projects/${id}/data-extraction` },
        { name: `Quality assessment`, path: `/projects/${id}/quality-assessment` },
        { name: `Data analysis`, path: `/projects/${id}/data-analysis` },
      ]
    },
    {
      name: `Presentation`,
      icon: `assignment_turned_in`,
      children: [
        { name: `Results`, path: `/projects/${id}/results` },
        { name: `Visualization`, path: `/projects/${id}/visualization` },
        { name: `Export`, path: `/projects/${id}/export` },
      ]
    },
    { label: `Communication`, type: `label` },
    { name: `Chat`, icon: `chat`, path: `/projects/${id}/chat` },
    { name: `Files`, icon: `folder`, path: `/projects/${id}/files` },
    { name: `Kanban`, icon: `view_column`, path: `/projects/${id}/kanban` },
  ];
}