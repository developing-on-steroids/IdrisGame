var perArr = [];
var refArr = ["Red", "Blue", "Green", "Yellow"];

function blink(l) {
  $('h1').html("Level " + l);
  var ranCol = Math.floor(Math.random() * 4);
  var currButt = "." + refArr[ranCol];
  setTimeout(function() {
    $(currButt).fadeOut().fadeIn();
  }, 200);
  perArr.push(refArr[ranCol]);
  console.log(perArr);
}

function check(x, y) {
  if (x == y) {
    console.log('correct');
  } else {
    console.log('game over');
    perArr = [];
    $('.game_butt').off('click');
    $('h1').html('You Lost Fucker, Smash your Head on the Keyboard to Restart');
    $('body').css('background-color', '#8B0000');
    $('body').one('keypress', function() {
      game();
    })
    return
  }
}

function levelRound() {
  console.log("level is called");
  var a = 0;
  var level = 0;
  blink(level + 1);

  $('.game_butt').click(function(e) {
    // animation code
    var k = "." + e.target.classList[0];
    console.log(k);
    $(k).addClass('highlight');
    setTimeout(function() {
    $(k).removeClass('highlight');
    }, 100);

    if (a == level) {
      check(e.target.classList[0], perArr[a]);
      level = level + 1;
      a = 0;
      blink(level);
    } else {
      check(e.target.classList[0], perArr[a]);
      a = a + 1
    }
  })
}

function game() {
  $('body').css('background-color', '#000000');
  $('h1').html('Press Any Key to Start')
  $('body').one('keypress', function() {
    levelRound();
  })
}

game();
