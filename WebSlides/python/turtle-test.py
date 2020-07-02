import turtle as t

def draw_diamond(turt):
    for i in range(3):
        turt.forward(100)
        turt.right(45)
        turt.forward(100)
        turt.right(135)

def draw_art():
    window = t.Screen()
    window.bgcolor("green")
    brad = t.Turtle()
    brad.shape("turtle")
    brad.color("red")
    brad.speed("fast")
    for i in range(1,37):
        draw_diamond(brad)
        brad.right(10)

    brad.right(90)
    brad.forward(300)
    window.exitonclick()
draw_art()