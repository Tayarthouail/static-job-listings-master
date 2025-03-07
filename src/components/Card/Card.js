import "./Card.scss";

const Card = (props) => {
 

  return (
    
    <li key={props.id} className="Card">
      <div className="image">
        <img src={props.logo} alt={`${props.company} logo`} />
      </div>
      <div className="content">
        <span className="company">{props.company}</span>
        {props.new && <span className="new">New!</span>}
        {props.featured && <span className="featured">Featured</span>}
        <h2>{props.position}</h2>
        <ul>
          <li>{props.postedAt}</li>
          <li>{props.contract}</li>
          <li>{props.location}</li>
        </ul>
      </div>
      <ul className="tags">
        {props.tags.map((tag, index) => {
          return <li key={index} 
          // onClick={()=> props.filterTag(tag.key, tag.value)}
          >
            {Object.keys(tag).map((m) => {
               // tag is an object => but we are checking if it going to return an array or not
            if (Array.isArray(tag[m])) {
              // console.log(tag[m]); // tag[m] returns arrays of values ["javascript"]
              //n represent each element in the array => li
              return tag[m].map((n) => (
                <li onClick={() => props.filterTag(m, n)}>{n}</li>
                
              ));
              
            } else {
              return (
                <span onClick={() => props.filterTag(m, tag[m])}>
                  {tag[m]}
                </span>
              );
            }
          })}</li>;
        })}
      </ul>
    </li>
  );
};

export default Card;
