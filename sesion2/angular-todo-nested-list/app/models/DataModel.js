function DataModel() {
  this.data = [
    { name: 'Personal', expanded: true,
    },
    { name: 'Work', expanded: false,
      items: [
        { name: 'Curso angular', completed: false }
      ]
    },
  ];
}
