import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";

interface ChatMessage {
    text: string;
    sender: string;
}

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState<ChatMessage[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() !== "") {
            setChat([...chat, { text: message, sender: "Me" }]);
            setMessage("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Card className='max-w-[800px]'>
            <CardHeader>Chat Bot</CardHeader>
            <CardBody>
                <div style={{ height: "400px", width: "100%", border: "1px solid black", overflowY: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", padding: "10px" }}>
                    {chat.map((msg, index) => (
                        <div key={index} style={{ marginBottom: "10px", textAlign: msg.sender === "Me" ? "right" : "left" }}>
                            <div style={{ display: "inline-block", borderRadius: "10px", padding: "10px", backgroundColor: msg.sender === "Me" ? "#DCF8C6" : "#E0E0E0", color: "black" }}>
                                <p style={{ margin: 0, fontSize: "14px" }}>{msg.text}</p> {/* Adjust font size here */}
                            </div>
                            <p style={{ margin: "5px 0", fontSize: "12px", color: "#666" }}>{msg.sender}</p>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        <Input
                            style={{ border: "none", outline: "none", boxShadow: "none" }}
                            placeholder="Type your message..."
                            autoComplete="off"
                            value={message}
                            onChange={handleChange}
                        />
                        <Button type="submit">
                            Send
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
};

export default Chatbot;
