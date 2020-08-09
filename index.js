function depthFirstSearch(rootNode, vertices, edges){
  const store = [];
  store.push(rootNode);
  const visited = [rootNode];

  while(store.length > 0){
    const vertice = store.pop();

    if(!vertice.discovered){
      vertice.discovered = true;
      const adjacentVertices = findAdjacent(vertice.name, vertices, edges);

      adjacentVertices.forEach(vert => {
        visited.push(vert);
        store.push(vert);
      })
    }
  }

};
