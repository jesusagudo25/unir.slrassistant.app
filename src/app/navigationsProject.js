
/* Systematic literature review - Tool for researchers */
export const navigationsProject = (id,name) => {
  console.log("navigationsProject",id,name);
  return [
    { name: name, icon: `book`, path: `/projects/${id}` },
    { label: `Project`, type: `label` },
    {
      name: `Planning`,
      icon: `playlist_add_check`,
      children: [
        { name: `General`, path: `/projects/${id}/general` },
        { name: `Review protocol`, path: `/projects/${id}/review-protocol` },
      ]
    },
    {
      name: `Conducting`,
      icon: `assignment`,
      children: [
        { name: `Search`, path: `/projects/${id}/search` },
        { name: `Quality assessment`, path: `/projects/${id}/quality-assessment` },
        { name: `Data extraction`, path: `/projects/${id}/data-extraction` },
      ]
    },
    {
      name: `Presentation`,
      icon: `assignment_turned_in`,
      children: [
        { name: `Report`, path: `/projects/${id}/report` },
      ]
    },
/*     { label: `Communication`, type: `label` },
    { name: `Chat`, icon: `chat`, path: `/projects/${id}/chat` },
    { name: `Files`, icon: `folder`, path: `/projects/${id}/files` }, */
  ];
}