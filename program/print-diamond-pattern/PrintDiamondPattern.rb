module PrintDiamond

  def self.print(num)

    1.upto(num) do |i|
      draw(num, i)
    end

    (num-1).downto(1) do |i|
      draw(num, i)
    end

    return
  end

  def self.draw(num, i)
    asterisks = "*" * i
    spaces = " " * (num - i)
    puts spaces + asterisks + (asterisks[1..])
  end
end

PrintDiamond.print(5)