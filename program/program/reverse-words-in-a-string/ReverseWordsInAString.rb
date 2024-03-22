class String
  def reverse_words
    split.inject([]){|str, word| str.unshift word}.join(' ')
  end

  def reverse_chars
    each_char.inject([]){|str, char| str.unshift char}.join('')
  end
end

puts "Hello World".reverse_words.inspect
