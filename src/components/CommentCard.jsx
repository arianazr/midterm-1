function CommentCard({comment})  {
    let isTopRated = comment.rating >= 4;
    return <>
        <div>
            <p>
            Id: {comment.id}
            </p>
            <p>
            Name: {comment.name}
            </p>
            <p>
            Email: {comment.email}
            </p>
            <p>
            Body: {comment.body}
            </p>
            <p>
            rating: {comment.rating}
            {isTopRated && <div> Your comment is top rated</div>}
            </p>
            <p>
            approved: {comment.approved}
            {comment.approved && <div>Your comment is approved</div>}
            </p>
        </div>
    </>
}
export default CommentCard;