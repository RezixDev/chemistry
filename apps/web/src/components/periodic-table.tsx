'use client';

import React, { useState, ReactElement } from 'react';
import type { Element } from '@repo/chemistry-data';
import { elements } from '@repo/chemistry-data';

type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide';

const getCategoryColor = (category?: ElementCategory): string => {
  if (!category) return '#E5E7EB'; // gray-200
  const colors: Record<ElementCategory, string> = {
    'alkali-metal': '#FECACA', // red-200
    'alkaline-earth-metal': '#FED7AA', // orange-200
    'transition-metal': '#FEF08A', // yellow-200
    'post-transition-metal': '#BBF7D0', // green-200
    metalloid: '#99F6E4', // teal-200
    nonmetal: '#BFDBFE', // blue-200
    halogen: '#C7D2FE', // indigo-200
    'noble-gas': '#E9D5FF', // purple-200
    lanthanide: '#FBCFE8', // pink-200
    actinide: '#FECDD3', // rose-200
  };
  return colors[category] || '#E5E7EB'; // gray-200
};

const periodicTableLayout = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
  [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [
    87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
    117, 118,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0, 0],
  [0, 0, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0, 0],
];

export function PeriodicTable(): ReactElement {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element): void => {
    setSelectedElement(element);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2
        style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}
      >
        Periodic Table
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          gap: '0.25rem',
        }}
      >
        {periodicTableLayout.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map((atomicNumber, colIndex) => {
              const element = elements.find(
                (e) => e.atomicNumber === atomicNumber
              );
              return element ? (
                <button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.25rem',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.25rem',
                    backgroundColor: getCategoryColor(
                      element.category as ElementCategory
                    ),
                  }}
                  key={element.atomicNumber}
                  onClick={() => {
                    handleElementClick(element);
                  }}
                  type='button'
                >
                  <span style={{ fontSize: '0.75rem' }}>
                    {element.atomicNumber}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    {element.symbol}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {element.name}
                  </span>
                </button>
              ) : (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  style={{ border: '1px solid transparent' }}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
      {selectedElement && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid #E5E7EB',
            borderRadius: '0.25rem',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold' }}>
            {selectedElement.name}
          </h3>
          <p>Atomic Number: {selectedElement.atomicNumber}</p>
          <p>Symbol: {selectedElement.symbol}</p>
          <p>Atomic Mass: {selectedElement.atomicMass}</p>
          <p>Category: {selectedElement.category}</p>
        </div>
      )}
    </div>
  );
}
