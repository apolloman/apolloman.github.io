
var destination = document.getElementById('app-1');

var Leter = React.createClass({
  render: function() {
    
    var letterStyles = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      textAlign: "center",
      color: "#333",
      fontSize: this.props.size,
      display: "inline-block"
    };

     return (
       <div style={letterStyles}>
           {this.props.children}
       </div>
     );
  }
});

ReactDOM.render(
<div>
   <Leter bgcolor="#58b3ff" size="20px">A</Leter>
   <Leter bgcolor="#ff605f" size="30px">E</Leter>
   <Leter bgcolor="#ffd52e" size="40px">I</Leter>
   <Leter bgcolor="#49dd8e" size="50px">O</Leter>
   <Leter bgcolor="#ae99ff" size="60px">U</Leter>
</div>,
destination
);


var Card = React.createClass({
   render: function(){
   var cardStyle = {
      height: 200,
      width: 150,
      marginTop: 20,
      padding: 0,
      backgroundColor: "#fff",
      WebkitFilter: "drop-shadow(0px 0px 3px #666)",
      filter: "drop-shadow(0px 0px 3px #666)"
   };

      return(
        <div style={cardStyle}>
          <Square color={this.props.color}/>
          <Label color={this.props.color}/>
        </div>
      );
   }
});


var Square = React.createClass({
  render: function(){

  var squareStyle = {
     height: 150,
     backgroundColor: this.props.color
  };

    return(
      <div style={squareStyle}>
        
      </div>
    );
  }
});


var Label = React.createClass({
   render: function(){

   var labelStyle = {
      fontWeight: "bold",
      padding: 13,
      margin: 0,
      textAlign: "center"
   };

      return(
        <p style={labelStyle}> {this.props.color}</p>
      );
   }
});



ReactDOM.render(
   <Card color="#ff0000"/>,
   document.getElementById('app')
);



var LightingCounter = React.createClass({

   getInitialState: function(){
   return {
      strikes: 0
    };
   },

   timerTick: function(){
      this.setState({
         strikes: this.state.strikes + 1
      });
   },

   componentDidMount: function() {
     setInterval(this.timerTick, 1000);
   },

   render: function() {
    var counterStyle = {
      color: "#66ffff",
      fontSize: 50
    };

    var count = this.state.strikes.toLocaleString();

     return (
        <h1 style={counterStyle}>{count}</h1>
     );

   }
});



var LightingCounterDisplay = React.createClass({
   render: function() {
     var commonStyle = {
       margin: 0,
       padding: 0
     };

     var divStyle = {
       width: 250,
       textAlign: "center",
       backgroundColor: "#000",
       padding: 40,
       color: "#999",
       borderRadius: 10,
       margin: "auto"
     };

     var textStyles = {
        emphasis: {
         fontSize: 38,
         ...commonStyle
        },

        smallEmphasis: {
          ...commonStyle
        },

        small: {
          fontSize: 17,
          opacity: 0.5,
          ...commonStyle
        }
     };

      return(
       <div style={divStyle}>
         <LightingCounter />
         <h2 style={textStyles.smallEmphasis}>Lighting Strikes</h2>
         <h2 style={textStyles.emphasis}>Worldwide</h2>
         <p style={textStyles.small}>(since you loaded this example)</p>
       </div>

    );
 
  }
});

ReactDOM.render(
   <LightingCounterDisplay />,
   document.getElementById('app-2')
);



var Circle = React.createClass({
  render: function(){
     var circleStyles = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: this.props.bgcolor,
        borderRadius: "50%",
        width: 100,
        height: 100
     };
   
     return (
       <div style={circleStyles}>
         
       </div>
     );
  }
});



var theCircle = <Circle bgcolor="#f9c240" />;

  var colors = ["#393e41", "#e94f37", "#ff0000", "#ccc",
  "#85cf44", "#a40e4c", "#297373", "#1c89bf", "#a1d363"];
 
  var rand = Math.floor(Math.random() * colors.length);

  var renderData = [];

  for(var i = 0; i < colors.length; i++) {
      var color = colors[i];
      renderData.push(<Circle key={i + color} bgcolor={color}/>);
  }

ReactDOM.render(
 <div>
   {renderData}
 </div>,
   document.getElementById('app-3')
);




var Counter = React.createClass({
  render: function(){

     var textStyle = {
        fontSize: 72,
        color: "#333",
        fontWeight: 700
     };

  return(
      <div style={textStyle}>
         {this.props.display}
      </div>
  );
}
});


var CounterParent = React.createClass({
  getInitialState: function(){
    return {
       count: 0
    };
  },

  increase: function(e){
  var currentCount = this.state.count;

  if(e.altKey){
     currentCount += 10;
   } else {
    currentCount += 1;
   }

    this.setState({
      count: currentCount
    });
  },
  
   render: function() {

     var backgroundStyle = {
        padding: 50,
        backgroundColor: "#ffc53a",
        width: 250,
        minHeight: 100,
        borderRadius: 10,
        textAlign: "center",
        margin: "auto"
     };

     var buttonStyle = {
        fontSize: "1em",
        width: 30,
        height: 30,
        color: "#333",
        fontWeight: 700,
        lineHeight: "3px"
     };

     return (
        <div style={backgroundStyle}>
          <Counter display={this.state.count} />
          <button onClick={this.increase} style={buttonStyle}>+</button>
        </div>
     );
   }
});

ReactDOM.render(
<div>
  <CounterParent />
</div>,
document.getElementById('app-4')
);