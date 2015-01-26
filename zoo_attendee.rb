require "HTTParty"
require "json"
require "pry"

puts "Hello, welcome to the zoo! What animal would you like to know more about?"
puts "You have several options: search for an animal in the zoo (a), grab a list of animals by type (t), or return a random animal from the zoo (r)."
puts "Which would you like to do? a/t/r? *q to quit."
choice = gets.chomp

def run_zoo(choice)
  if choice == "q"
    puts "TA-TA!"
  elsif choice == "a"
    puts "What animal would you like to know more about?"
    reply = gets.chomp.downcase.gsub(" ","_");
    url = "http://localhost:3000/animals"
    request = HTTParty.get(url)
    animal = request[reply];
    if animal
      puts animal
    else
      puts "No information for that animal was found."
    end
    puts "Shall we continue? a/t/r/q"
    choice = gets.chomp
    zoo_repeat = run_zoo(choice)
  elsif choice == "t"
    puts "Please enter the type of animal you would like to know more about: mammal, dinosaur, or bird."
    reply = gets.chomp.capitalize
    url = "http://localhost:3000/#{reply}"
    response = HTTParty.get(url);
    puts response
    puts "Shall we continue? a/t/r/q"
    choice = gets.chomp
    zoo_repeat = run_zoo(choice)
  elsif choice == "r"
    url = "http://localhost:3000/random"
    response = HTTParty.get(url)
    puts response
    puts "Shall we continue? a/t/r/q"
    choice = gets.chomp
    zoo_repeat = run_zoo(choice)
  end
end

zoo = run_zoo(choice)
