import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const NoirScavengerHunt = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [currentClue, setCurrentClue] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const [completed, setCompleted] = useState(false);

  // Team configurations with engineering themes
  const teams = {
    mechanical: {
      name: "Mechanical Engineering",
      color: "#c9a55c",
      evidence: "THE WEAPON",
      clues: [
        {
          text: "Your investigation begins in the heart of motion and machines. The first witness mentioned seeing suspicious activity near the place where metal meets precision. Search where the lathes spin and the mills grind.",
          answer: "machine shop",
          hint: "Where raw metal becomes precision parts"
        },
        {
          text: "The plot thickens. A blueprint was found torn and discarded. The next clue lies where autonomous creations come to life, where gears and circuits dance in mechanical harmony.",
          answer: "robotics lab",
          hint: "Where machines learn to move on their own"
        },
        {
          text: "You're close now, detective. The final piece of your investigation awaits where forces are measured and materials are tested to their breaking point. Find where strength meets science.",
          answer: "testing lab",
          hint: "Where we discover what materials can withstand"
        }
      ],
      conclusion: "Outstanding work, detective. You've uncovered THE WEAPON: a precision-machined torque wrench from the testing lab. This wasn't just any tool - it was specially calibrated, and only someone with mechanical engineering knowledge could have wielded it so effectively."
    },
    electrical: {
      name: "Electrical Engineering",
      color: "#4a90e2",
      evidence: "THE TIME OF CRIME",
      clues: [
        {
          text: "Your case starts where current flows and circuits come alive. The security logs show a power fluctuation at a critical moment. Begin your search where breadboards and oscilloscopes reveal the truth.",
          answer: "circuits lab",
          hint: "Where students build and test electronic circuits"
        },
        {
          text: "Interesting. A burnt capacitor, intentionally damaged. The trail leads to where energy is converted and distributed throughout the building. Investigate where voltage is transformed.",
          answer: "power systems room",
          hint: "The electrical heart of the building"
        },
        {
          text: "The timestamp on the damaged equipment tells a story. Your final clue awaits where electromagnetic waves are studied and signals are analyzed. Find the place where the invisible becomes visible.",
          answer: "signals lab",
          hint: "Where we study waves and frequencies"
        }
      ],
      conclusion: "Excellent detective work. You've pinpointed THE TIME OF CRIME: 10:47 PM, confirmed by the power surge recorded in the signals lab. The sabotaged equipment created a precise electrical signature that timestamps the entire incident."
    },
    civil: {
      name: "Civil Engineering",
      color: "#8b6f47",
      evidence: "THE LOCATION",
      clues: [
        {
          text: "Every structure tells a story, detective. Your investigation begins where concrete is tested and foundations are proven. Strange stress fractures were reported - search where materials meet their match.",
          answer: "materials lab",
          hint: "Where we test the strength of building materials"
        },
        {
          text: "The fracture pattern was no accident. Someone with knowledge of structural weak points planned this carefully. Your next clue lies where models of bridges and buildings reveal their secrets under simulated stress.",
          answer: "structures lab",
          hint: "Where miniature buildings are tested to failure"
        },
        {
          text: "You're standing on the answer, detective. The final piece is hidden where soil composition and ground stability are analyzed. The building plans will lead you to the truth.",
          answer: "geotechnical lab",
          hint: "Where we study what lies beneath our feet"
        }
      ],
      conclusion: "Masterful work, detective. You've identified THE LOCATION: the sub-basement near the geotechnical lab. The structural analysis shows it's the only spot in the building where the foundation's weakness could be exploited. Someone knew exactly where to strike."
    },
    chemical: {
      name: "Chemical Engineering",
      color: "#6b8e23",
      evidence: "THE MOTIVE",
      clues: [
        {
          text: "In chemistry, every reaction has a catalyst. Your investigation begins where substances are transformed and equations become reality. A mysterious compound was synthesized here - find where reactions are controlled.",
          answer: "reaction lab",
          hint: "Where chemical transformations happen under controlled conditions"
        },
        {
          text: "The compound analysis reveals intent. Someone was creating something specific, something dangerous. Follow the trail to where liquids are separated and purified, where truth is distilled from mixture.",
          answer: "distillation room",
          hint: "Where we separate mixtures based on boiling points"
        },
        {
          text: "The final answer lies in the data. Check where process flows are designed and optimized, where industrial-scale thinking happens. The motive is written in the process diagrams.",
          answer: "process design lab",
          hint: "Where we plan large-scale chemical production"
        }
      ],
      conclusion: "Brilliant deduction, detective. You've uncovered THE MOTIVE: industrial espionage. The process designs reveal plans to steal a revolutionary catalyst formula worth millions. The chemical trail leads directly to corporate sabotage and greed."
    },
    computer: {
      name: "Computer Engineering",
      color: "#9b59b6",
      evidence: "THE SUSPECT",
      clues: [
        {
          text: "In the digital realm, everyone leaves a trace. Your investigation starts where code is written and debugged. Server logs show unauthorized access from this location. Search where programmers craft their solutions.",
          answer: "computer lab",
          hint: "Where rows of computers await eager programmers"
        },
        {
          text: "The access logs have been tampered with, but not perfectly. A digital fingerprint remains. Your next stop is where networks are configured and data flows between systems. Find where the cables converge.",
          answer: "server room",
          hint: "The cold, humming heart of the network"
        },
        {
          text: "You're close to cracking the case. The final clue is where hardware meets software, where embedded systems and microcontrollers are programmed. The suspect's identity is encoded in the firmware.",
          answer: "embedded systems lab",
          hint: "Where we program the computers inside other devices"
        }
      ],
      conclusion: "Exceptional work, detective. You've identified THE SUSPECT: Dr. Alexandra Chen, a visiting researcher with Level 3 access to all labs. The embedded system logs reveal her unique programming style and credential usage. She had the knowledge, access, and expertise to pull this off."
    }
  };

  const handleTeamSelect = (teamKey) => {
    setSelectedTeam(teamKey);
    setCurrentClue(0);
    setUserAnswer('');
    setError('');
    setCompleted(false);
  };

  const handleSubmitAnswer = () => {
    const team = teams[selectedTeam];
    const correctAnswer = team.clues[currentClue].answer.toLowerCase().trim();
    const submittedAnswer = userAnswer.toLowerCase().trim();

    if (submittedAnswer === correctAnswer) {
      setError('');
      setUserAnswer('');
      
      if (currentClue === team.clues.length - 1) {
        setCompleted(true);
      } else {
        setCurrentClue(currentClue + 1);
      }
    } else {
      setError('Not quite, detective. Check your evidence again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitAnswer();
    }
  };

  const resetInvestigation = () => {
    setSelectedTeam(null);
    setCurrentClue(0);
    setUserAnswer('');
    setError('');
    setCompleted(false);
  };

  // Landing page - team selection
  if (!selectedTeam) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 text-amber-400" style={{ fontFamily: 'Georgia, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              THE ENGINEERING MYSTERY
            </h1>
            <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 italic mb-2">A crime has been committed in the Engineering Building.</p>
            <p className="text-lg text-gray-400">Five teams. Five pieces of evidence. One truth.</p>
          </div>

          <div className="bg-gray-800 border-2 border-amber-600 p-8 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-amber-300">THE CASE FILE</h2>
            <p className="text-gray-300 mb-4">
              Last night at approximately 10:47 PM, a sophisticated crime was executed in this very building. 
              The perpetrator possessed advanced engineering knowledge and had access to multiple laboratories.
            </p>
            <p className="text-gray-300">
              Your team has been assigned to investigate one crucial aspect of this case. 
              Follow the clues, crack the codes, and uncover the truth.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-amber-400">SELECT YOUR INVESTIGATION TEAM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(teams).map(([key, team]) => (
              <button
                key={key}
                onClick={() => handleTeamSelect(key)}
                className="bg-gray-800 border-3 p-6 hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
                style={{ borderColor: team.color, borderWidth: '3px' }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: team.color }}>
                  {team.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">INVESTIGATING:</p>
                <p className="text-xl font-bold text-amber-300">{team.evidence}</p>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Case File #ENG-2026-047 | CLASSIFIED</p>
          </div>
        </div>
      </div>
    );
  }

  const team = teams[selectedTeam];

  // Completion screen
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-amber-400" style={{ fontFamily: 'Georgia, serif' }}>
              CASE CLOSED
            </h1>
            <div className="h-1 w-24 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="bg-gray-800 border-3 p-8 mb-8 shadow-2xl" style={{ borderColor: team.color, borderWidth: '3px' }}>
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: team.color }}>
              {team.name}
            </h2>
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm mb-2">EVIDENCE RECOVERED:</p>
              <p className="text-3xl font-bold text-amber-400 mb-6">{team.evidence}</p>
            </div>
            <div className="bg-gray-900 p-6 border-l-4" style={{ borderColor: team.color }}>
              <p className="text-gray-300 text-lg leading-relaxed">{team.conclusion}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              Report your findings to the Chief Inspector immediately.
            </p>
            <p className="text-gray-400 mb-8">
              The other teams are still gathering evidence. Once all pieces are assembled, the full truth will be revealed.
            </p>
            <button
              onClick={resetInvestigation}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 transition-all"
            >
              Return to Case Files
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active investigation screen
  const currentClueData = team.clues[currentClue];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <button
            onClick={resetInvestigation}
            className="text-gray-400 hover:text-amber-400 transition-colors mb-4"
          >
            ← Back to Team Selection
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2" style={{ color: team.color, fontFamily: 'Georgia, serif' }}>
              {team.name}
            </h1>
            <p className="text-gray-400">INVESTIGATING: <span className="text-amber-400 font-bold">{team.evidence}</span></p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">INVESTIGATION PROGRESS</span>
            <span className="text-gray-400 text-sm">CLUE {currentClue + 1} OF {team.clues.length}</span>
          </div>
          <div className="w-full bg-gray-700 h-2">
            <div 
              className="h-2 transition-all duration-500"
              style={{ 
                width: `${((currentClue + 1) / team.clues.length) * 100}%`,
                backgroundColor: team.color 
              }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 border-3 p-8 mb-6 shadow-2xl" style={{ borderColor: team.color, borderWidth: '3px' }}>
          <div className="mb-6">
            <h2 className="text-sm text-gray-500 mb-2">CASE NOTE #{currentClue + 1}</h2>
            <p className="text-xl text-gray-200 leading-relaxed italic">
              "{currentClueData.text}"
            </p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <label className="block text-sm font-bold mb-3 text-gray-400">
              ENTER LOCATION:
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type the location you've found..."
              className="w-full bg-gray-900 border-2 border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none mb-4"
            />
            
            {error && (
              <div className="flex items-center gap-2 text-red-400 mb-4 bg-red-900/20 p-3 border-l-4 border-red-500">
                <AlertCircle size={20} />
                <p>{error}</p>
              </div>
            )}

            <button
              onClick={handleSubmitAnswer}
              className="w-full font-bold py-3 px-6 transition-all hover:opacity-90 text-white"
              style={{ backgroundColor: team.color }}
            >
              SUBMIT EVIDENCE
            </button>

            <details className="mt-4">
              <summary className="text-gray-500 text-sm cursor-pointer hover:text-gray-400">
                Need a hint, detective?
              </summary>
              <p className="text-gray-400 mt-2 pl-4 italic text-sm">
                {currentClueData.hint}
              </p>
            </details>
          </div>
        </div>

        <div className="text-center text-gray-600 text-xs">
          <p>CLASSIFIED | FOR AUTHORIZED INVESTIGATORS ONLY</p>
        </div>
      </div>
    </div>
  );
};

export default NoirScavengerHunt;