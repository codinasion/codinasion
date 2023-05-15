function ispangram(input::AbstractString)
    input = lowercase(input)
    letters = Set('a':'z')
    for ch in input
        delete!(letters, ch)
    end
    isempty(letters)
end

if ispangram("The quick brown fox jumps over the lazy dog")
  println("Pangram")
else
 println("Not a Pangram")
end
