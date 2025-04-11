
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<Array<{role: 'user' | 'agent', content: string}>>([]);

  const handleTest = () => {
    setIsDialogOpen(true);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    // Add user message
    const newConversation = [
      ...conversation,
      { role: 'user' as const, content: userInput }
    ];
    
    setConversation(newConversation);
    setUserInput('');
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      const responses = [
        `Based on your input, I recommend exploring our ${agent.category} solutions.`,
        `Thank you for sharing. Our ${agent.name} can help optimize your experience.`,
        `I've analyzed your request and have some personalized recommendations for you.`,
        `Let me suggest some options based on the information you've provided.`
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setConversation([
        ...newConversation,
        { role: 'agent' as const, content: randomResponse }
      ]);
    }, 1000);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="text-4xl mb-4">{agent.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
          <p className="text-gray-600 mb-4">{agent.description}</p>
          <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
            {agent.category}
          </div>
          <Button onClick={handleTest} className="w-full">Test This Agent</Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-xl">{agent.icon}</span> {agent.name}
            </DialogTitle>
            <DialogDescription>
              Enter your request to test how this agent would respond with personalized recommendations.
            </DialogDescription>
          </DialogHeader>
          
          <div className="h-[300px] overflow-y-auto border rounded-md p-4 mb-4 bg-gray-50">
            {conversation.length === 0 ? (
              <div className="text-center text-gray-500 h-full flex items-center justify-center">
                <p>Start the conversation by typing a message below</p>
              </div>
            ) : (
              conversation.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div 
                    className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center gap-2">
            <Input 
              placeholder="Enter your request..." 
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AgentCard;
