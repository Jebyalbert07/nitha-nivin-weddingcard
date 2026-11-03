import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageSquareHeart } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

const initialWishes = [
  {
    id: 1,
    name: 'Jacob & Mariamma',
    relation: 'Family Friends',
    message: 'May God abundantly bless Nitha and Nivin with lifelong happiness, grace, and unfailing love as you unite in Holy Matrimony!',
    date: 'Yesterday',
    likes: 12
  },
  {
    id: 2,
    name: 'Anjali Kurian',
    relation: 'Friend',
    message: 'So incredibly thrilled for you both! Nitha, you are going to be the most gorgeous bride. Can’t wait for January 2027!',
    date: '2 days ago',
    likes: 9
  },
  {
    id: 3,
    name: 'Philip Mathew',
    relation: 'Cousin',
    message: 'Heartiest congratulations to our dear Nivin and Nitha! Wishing you both endless laughter, adventure, and mutual respect.',
    date: '3 days ago',
    likes: 15
  }
];

export const WishesGuestbook = () => {
  const [wishes, setWishes] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [likedIds, setLikedIds] = useState([]);

  useEffect(() => {
    const savedWishes = localStorage.getItem('nitha_nivin_wishes');
    if (savedWishes) {
      try {
        setWishes(JSON.parse(savedWishes));
      } catch (e) {
        setWishes(initialWishes);
      }
    } else {
      setWishes(initialWishes);
    }

    const savedLikes = localStorage.getItem('nitha_nivin_liked_wishes');
    if (savedLikes) {
      try {
        setLikedIds(JSON.parse(savedLikes));
      } catch (e) {}
    }
  }, []);

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: authorName.trim(),
      relation: relation.trim() || 'Well-wisher',
      message: message.trim(),
      date: 'Just now',
      likes: 1
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('nitha_nivin_wishes', JSON.stringify(updated));

    setAuthorName('');
    setRelation('');
    setMessage('');
  };

  const handleToggleLike = (id) => {
    const hasLiked = likedIds.includes(id);
    const newLiked = hasLiked
      ? likedIds.filter((item) => item !== id)
      : [...likedIds, id];

    setLikedIds(newLiked);
    localStorage.setItem('nitha_nivin_liked_wishes', JSON.stringify(newLiked));

    const updated = wishes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          likes: hasLiked ? item.likes - 1 : item.likes + 1
        };
      }
      return item;
    });

    setWishes(updated);
    localStorage.setItem('nitha_nivin_wishes', JSON.stringify(updated));
  };

  return (
    <section id="guestbook" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          Words of Love
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          Wishes &amp; Blessings
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          Leave your prayers, love, and joyous wishes for Nitha &amp; Nivin in our virtual guestbook.
        </p>
        <SectionDivider label="🕊" />
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Post Form */}
        <div className="md:col-span-5 bg-[#faf8f3] rounded-3xl p-6 sm:p-7 border border-[#ded4c3] shadow-md">
          <div className="flex items-center gap-2 mb-4 text-[#8c7035]">
            <MessageSquareHeart size={20} />
            <h3 className="font-['Cinzel'] text-lg font-bold text-[#2d3a2b]">
              Leave a Blessing
            </h3>
          </div>

          <form onSubmit={handleAddWish} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4d5c4c] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rachel & George"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#d6c9b4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8c7035]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4d5c4c] mb-1">
                Relation / Note (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. College Friend, Cousin, Neighbor"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#d6c9b4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8c7035]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4d5c4c] mb-1">
                Your Message *
              </label>
              <textarea
                required
                rows="4"
                placeholder="Write your prayers and warm wishes..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#d6c9b4] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8c7035]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#2d3a2b] hover:bg-[#3d4f3b] text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Send size={14} />
              <span>Post Your Blessing</span>
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="md:col-span-7 space-y-4 max-h-[620px] overflow-y-auto pr-1">
          {wishes.map((item) => {
            const isLiked = likedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white/95 rounded-2xl p-5 border border-[#e4daca] shadow-sm hover:shadow transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-['Cinzel'] text-sm font-bold text-[#273427]">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-[#8c7035] uppercase tracking-wider font-medium">
                      {item.relation} • {item.date}
                    </span>
                  </div>

                  <button
                    onClick={() => handleToggleLike(item.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-colors border ${
                      isLiked
                        ? 'bg-rose-50 text-rose-600 border-rose-200'
                        : 'bg-stone-50 text-stone-500 border-stone-200 hover:text-rose-600'
                    }`}
                  >
                    <Heart
                      size={13}
                      className={isLiked ? 'fill-rose-500 text-rose-500' : ''}
                    />
                    <span className="font-medium text-[11px]">{item.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif italic">
                  "{item.message}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

