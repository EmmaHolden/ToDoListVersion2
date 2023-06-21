const Counter = ({items}) => {    
    let numberComplete = items.filter(item => item.isSelected).length;
    let numberRemaining = items.filter(item => !item.isSelected).length;
  
    return (
            <div>
                <h2>You have completed {numberComplete} task(s)!</h2>
                <h2>You have {numberRemaining} task(s) left to complete!</h2>

            </div>
    );
};

export default Counter;
