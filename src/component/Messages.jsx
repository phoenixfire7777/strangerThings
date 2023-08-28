

export default function Messages({messages}){
    return(
        <div>
            {
                messages.map((message) => {
                    return(
                        <div>
                            <p><strong>From:</strong> {message.fromUser.username}</p>
                            <p><strong>Message:</strong> {message.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}