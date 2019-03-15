require('minitest/autorun')
require('minitest/rg')
require('pry')
require_relative('../card_game')
require_relative('../card')

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("hearts", 2)
    @card2 = Card.new("spades", 1)
    @card3 = Card.new("diamonds", 10)
    @card4 = Card.new("clubs", 9)
    @card5 = Card.new("hearts", 4)

    @cards = [@card1, @card2, @card3, @card4, @card5]

    @card_game = CardGame.new

  end

  def test_return_card1_value
    assert_equal(2, @card1.value)
  end

  def test_check_for_ace__false
    assert_equal(false, @card_game.check_for_ace(@card1))
  end

  def test_check_for_ace__true
    assert_equal(true, @card_game.check_for_ace(@card2))
  end

  def test_check_highest_card
    assert_equal(@card3, @card_game.highest_card(@card2, @card3))
  end

  # def test_cards_total
  #   assert_equal(26, @card_game.cards_total(@cards))
  # end

end
