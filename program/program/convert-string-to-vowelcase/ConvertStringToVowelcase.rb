module Vowelcase

  VOWELS = %w[a e i o u]
  
  def self.vowel(string)
    result = ""
    string.chars { |c| VOWELS.include?(c) ? result += c.upcase : result += c.downcase }
    result
  end
end

puts Vowelcase.vowel("hello world") # => hEllO wOrld