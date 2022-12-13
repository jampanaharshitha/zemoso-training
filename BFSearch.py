def BFSearch(self,s):
        visited = [False] * (max(self.graph) + 1)
        queue = []
        queue.append(s)
        visited[s] = True
        while queue:
            s= queue.pop(0)
            print (s,"course completed successfully")
            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True
        for i,j in self.graph.items():
            if(visited[i]==False):
                print(i,"course completed completely")
