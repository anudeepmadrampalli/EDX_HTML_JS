from abc import ABCMeta,abstractmethod

class shape(metaclass = ABCMeta):
    @abstractmethod
    def area(self):
        return 0


class Square(shape):
    side = 5
    def area(self):
        print("The area of square is :",self.side*self.side)

class Rectangle(shape):
    width = 6
    height = 10
    def area(self):
        print("The area of rectangle is :",self.width*self.height)


Square  = Square()
rect = Rectangle()
Square.area()
rect.area()

    