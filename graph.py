from collections import defaultdict
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    def addEdgetoGraph(self,u,v):
        self.graph[u].append(v)
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
        
graph = Graph()  
graph.addEdgetoGraph(0, 1)  
graph.addEdgetoGraph(1, 2)  
graph.addEdgetoGraph(2, 3)  
graph.addEdgetoGraph(3, 1)  
graph.addEdgetoGraph(4, 3)  
graph.addEdgetoGraph(5, 4)  
    
print ( "The Breadth First Search Traversal for the training plan is as Follows: " )  
graph.BFSearch(1) 
