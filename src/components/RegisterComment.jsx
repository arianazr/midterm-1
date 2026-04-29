import { useState } from "react"

function RegisterComment({onSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    const [approved, setApproved] = useState(false);

    function sumbit() {
        if(!name || !email || !body ) return;
        onSubmit({
            id: Date.now(),
            email: email,
            body: body,
            rating: rating,
            approved: approved,
        });
        resetValues();
    }

    function resetValues() {
        setName("");
        setEmail("");
        setBody("");
        setRating(0);
        setApproved(false);
    }
    return <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)}/>
        <input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.value)}/>
        <button onClick={sumbit}>Create Comment</button>
    </>
}
export default RegisterComment;