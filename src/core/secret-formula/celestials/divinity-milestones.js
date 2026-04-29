export const divinityMilestones = {
  firstDivine: {
    divinities: 1,
    get reward() {
      return ` The ${format(Decimal.pow10(1e150))} and ${format(Decimal.pow10(1e225))} Antimatter softcaps are replaced with a softcap that applies at ${format(DC.E9E15)} Antimatter and will get stronger with each Divinity
        Unlock a new Galaxy Generator Upgrade
        All Galaxy Generator Upgrade rewards are squared
        Achievement 207 uses an adjusted formula which improves based on Divinities
        Each Divinity squares the gain of Celestial Points and Doomed Particles
        Start Doom with all Pelle Upgrades purchased
        Reduce the Celestial Matter Softcap by ${formatPercents(0.05)}
        Reduce the Hadron Effect cap time for all Hadron/Dark Hadron effects by ${formatPercents(0.2)}
        Gain ${formatX(10)} more Endgames
        Power Dual Machines by ${format(1.1, 1, 1)}
        The log10 of your highest-ever Galaxy amount multiplies Entropy gain`;
    }
  },
  divineDimensions: {
    divinities: 2,
    get reward() {
      return ` Unlock Divine Dimensions
        Unlock Divinity Upgrades
        Unlock a new Galaxy Generator Upgrade
        Pending Remnants are gained immediately without Armageddon required
        Reduce the Hadron Effect cap time for all Hadron/Dark Hadron effects by ${formatPercents(0.2)}
        Reduce the time for Remnants of Alpha Decay to cap by ${formatPercents(0.2)}
        Galaxy Generator Upgrade Autobuyers buy max`;
    }
  }
};
