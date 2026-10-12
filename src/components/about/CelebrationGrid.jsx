import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const CelebrationGrid = () => {
  const celebrations = [
    {
      id: 1,
      emoji: '🌾',
      title: 'Rice Farmers',
      tamil: 'நெல் விவசாயிகள்',
      description: 'The guardians of our staple food, nurturing paddy fields across Tamil Nadu with generations of wisdom',
      details: [
        'Traditional Kuruvai & Samba cultivation',
        'Water management expertise',
        'Seed preservation knowledge',
        'Sustainable farming practices'
      ]
    },
    {
      id: 2,
      emoji: '🥥',
      title: 'Plantation Workers',
      tamil: 'தோட்ட தொழிலாளர்கள்',
      description: 'Those who tend to coconut groves, mango orchards, and spice plantations with dedicated care',
      details: [
        'Coconut and palm cultivation',
        'Mango and fruit orchards',
        'Spice and cash crops',
        'Tree crop management'
      ]
    },
    {
      id: 3,
      emoji: '🐄',
      title: 'Livestock Keepers',
      tamil: 'கால்நடை வளர்ப்போர்',
      description: 'Dairy farmers and cattle herders who provide milk, organic fertilizer, and agricultural power',
      details: [
        'Indigenous cattle breeds',
        'Dairy farming excellence',
        'Organic manure production',
        'Sustainable livestock practices'
      ]
    },
    {
      id: 4,
      emoji: '👩‍🌾',
      title: 'Women Farmers',
      tamil: 'பெண் விவசாயிகள்',
      description: 'The backbone of Tamil agriculture, excelling in seed selection, kitchen gardens, and post-harvest care',
      details: [
        'Traditional seed preservation',
        'Kitchen garden expertise',
        'Post-harvest processing',
        'Organic farming leadership'
      ]
    },
    {
      id: 5,
      emoji: '💪',
      title: 'Daily Laborers',
      tamil: 'நாள் கூலி தொழிலாளர்கள்',
      description: 'The backbone of rural economy, working in fields, construction, and agricultural processing',
      details: [
        'Harvesting and threshing',
        'Field preparation work',
        'Irrigation maintenance',
        'Agricultural construction'
      ]
    },
    {
      id: 6,
      emoji: '🔧',
      title: 'Agricultural Technicians',
      tamil: 'விவசாய தொழில்நுட்பவியலாளர்கள்',
      description: 'Modern farming experts who bridge traditional knowledge with contemporary agricultural technology',
      details: [
        'Machinery operation',
        'Irrigation system design',
        'Soil testing expertise',
        'Technology integration'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              What We Celebrate
            </h2>
          </FadeInText>
          
          <FadeInText>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every role in Tamil agriculture deserves recognition, respect, and celebration. 
              These are the heroes who feed our state and preserve our heritage.
            </p>
          </FadeInText>

          <FadeInText>
            <div className="mt-8 bg-white rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">
              <p className="text-lg font-semibold text-primary">
                "ஒவ்வொரு கைகளும் ஒரு கதை சொல்கிறது, ஒவ்வொரு முகமும் ஒரு பெருமையை வெளிப்படுத்துகிறது"
              </p>
              <p className="text-gray-600 mt-2">
                "Every hand tells a story, every face reveals a pride"
              </p>
            </div>
          </FadeInText>
        </div>

        {/* Celebration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {celebrations.map((item, index) => (
            <ScaleInImage key={item.id}>
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group h-full flex flex-col">
                
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-earth transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-500">
                    {item.tamil}
                  </p>
                </div>

                {/* Description */}
                <FadeInText>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-center">
                    {item.description}
                  </p>
                </FadeInText>

                {/* Details */}
                <div className="space-y-3">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-earth transition-colors duration-300"></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="w-full h-2 bg-gradient-to-r from-primary to-earth rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </ScaleInImage>
          ))}
        </div>

        {/* Community Impact */}
        <ScaleInImage>
          <div className="bg-gradient-to-r from-primary to-earth text-white rounded-3xl p-12 text-center">
            <FadeInText>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                United in Purpose, Diverse in Strength
              </h3>
              
              <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
                From the smallest kitchen garden to the largest rice fields, every contribution 
                matters. Together, we form the agricultural ecosystem that sustains Tamil Nadu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                  <p className="text-white/90">Working together across all agricultural roles</p>
                </div>
                
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-bold text-lg mb-2">Growth</h4>
                  <p className="text-white/90">Creating opportunities for everyone to prosper</p>
                </div>
                
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-4xl mb-3">🌟</div>
                  <h4 className="font-bold text-lg mb-2">Recognition</h4>
                  <p className="text-white/90">Celebrating every contribution with dignity</p>
                </div>
              </div>
            </FadeInText>
          </div>
        </ScaleInImage>
      </div>
    </section>
  );
};

export default CelebrationGrid;
