

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


def has_letter(arr, letter)
  arr.map do |c|
    if c.include?(letter)
      puts  c
    end
  end
end


has_letter(beverages_array, 'o')
has_letter(beverages_array, 't')


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sumOfNumbers(arr)
  arr.sum
end

p sumOfNumbers(nums_array1)
p sumOfNumbers(nums_array2)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0.
# Create a bike_info method that returns a sentence with all the data from the bike object.
class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model, wheels, current_speed)
    @model = 'Trek Bike'
    @wheels = 2
    @current_speed = 0
  end

  def bike_info
    p "Hello, pleb your #{@model} with #{@wheels} wheels going #{@current_speed} MPH is garbage."
  end

  def slow_down(num)
    if @current_speed < num
      @current_speed = 0
    else
      @current_speed -= num
    end
    puts "your #{@model} is going #{current_speed}"
  end

  def pedal_faster(num)
    if @current_speed += num
      puts "your #{@model} is going #{current_speed}"
    end
  end
end

my_bike = Bike.new('', '','')
my_bike.bike_info
my_bike.pedal_faster(10)
my_bike.pedal_faster(18)
my_bike.slow_down(5)
my_bike.slow_down(25)


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
