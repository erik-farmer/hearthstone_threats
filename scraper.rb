require 'rubygems'
require 'nokogiri'
require 'restclient'

spells = {
  "Druid" => [],
  "Hunter" => [],
  "Paladin" => [],
  "Priest" => [],
  "Mage" => [],
  "Rogue" => [],
  "Shaman" => [],
  "Warlock" => [],
  "Warrior" => []
}

page = Nokogiri::HTML(RestClient.get("http://hearthstonecardlist.com/"))
table = page.css('html body div#main_wrap div#main div#main_content div#main_center table#myTable.LineBorder tbody')

# gets raw table row
rows = table.css('tr').each do |row|
  #find out if the card type is a spell
  if row.css('td')[4].text == "Spell"
    #see what character it belongs to
    tds = row.css('td')
    char = tds[2].css('img').to_s.split(/\W+/)[-1]

    card_name   = 'card_name: '   + "'" + tds[1] + "'"
    mana_cost   = 'mana_cost: '   + tds[6]
    description = 'description: ' + "'" + tds[9] + "'"

    unless char == "alt"
      puts "inserting #{card_name} into #{char}"
      spells[char] << "{#{card_name}, #{mana_cost}, #{description}},"
    end
  end
end

spells.each do |char, spells|
  puts char
  puts spells
end