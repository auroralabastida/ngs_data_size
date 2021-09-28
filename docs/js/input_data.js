const Platform=["Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina MiSeq", "Illumina NextSeq 550", "Illumina NextSeq 550", "Illumina NextSeq 550", "Illumina NextSeq 550", "Illumina NextSeq 1000/2000", "Illumina NextSeq 1000/2000", "Illumina NextSeq 1000/2000", "Illumina NextSeq 1000/2000", "Illumina NextSeq 1000/2000", "Illumina NextSeq 1000/2000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Illumina NovaSeq 6000", "Ion Torrent - Ion PGM", "Ion Torrent - Ion PGM", "Ion Torrent - Ion PGM", "Ion Torrent - Ion PGM", "Ion Torrent - Ion Proton", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL", "Ion Torrent - Ion S5 and S5 XL"]
const Read_Length=["36", "25", "150", "250", "75", "300", "150", "250", "150", "150", "75", "150", "75", "50", "100", "150", "50", "100", "150", "50", "100", "150", "250", "50", "100", "150", "50", "100", "150", "100", "150", "35", "200", "400", "200", "400", "200", "200", "400", "200", "400", "200", "400", "200"]
const Sequence_format=["single", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "both", "paired", "paired", "paired", "paired", "paired", "both", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "paired", "single", "single", "single", "single", "single", "single", "single", "single", "single", "single", "single", "single", "single"]
const max_fragments=["15000000", "15000000", "15000000", "15000000", "25000000", "25000000", "4000000", "1000000", "1000000", "400000000", "400000000", "130000000", "130000000", "400000000", "400000000", "400000000", "1100000000", "1100000000", "1100000000", "800000000", "800000000", "800000000", "800000000", "1600000000", "1600000000", "1600000000", "4100000000", "4100000000", "4100000000", "10000000000", "10000000000", "10000000000", "2500000", "2500000", "5000000", "5000000", "70000000", "2500000", "2500000", "5000000", "5000000", "20000000", "20000000", "75000000"]
const max_output=["540000000", "750000000", "4500000000", "7500000000", "3750000000", "15000000000", "1200000000", "500000000", "300000000", "120000000000", "60000000000", "39000000000", "19500000000", "40000000000", "80000000000", "120000000000", "110000000000", "220000000000", "330000000000", "80000000000", "160000000000", "240000000000", "400000000000", "160000000000", "320000000000", "480000000000", "410000000000", "820000000000", "1230000000000", "2000000000000", "3000000000000", "350000000000", "500000000", "1000000000", "1000000000", "2000000000", "14000000000", "500000000", "1000000000", "1000000000", "2000000000", "4000000000", "8000000000", "15000000000"]
const Chemistry_details=["MiSeq Reagent Kit v2", "MiSeq Reagent Kit v2", "MiSeq Reagent Kit v2", "MiSeq Reagent Kit v2", "MiSeq Reagent Kit v3", "MiSeq Reagent Kit v3", "MiSeq Reagent Kit v2 Micro", "MiSeq Reagent Kit v2 Nano", "MiSeq Reagent Kit v2 Nano", "NextSeq 550 System High-Output Kit", "NextSeq 550 System High-Output Kit", "NextSeq 550 System Mid-Output Kit", "NextSeq 550 System Mid-Output Kit", "NextSeq 1000/2000 P2 Reagents", "NextSeq 1000/2000 P2 Reagents", "NextSeq 1000/2000 P2 Reagents", "NextSeq 1000/2000 P3 Reagents", "NextSeq 1000/2000 P3 Reagents", "NextSeq 1000/2000 P3 Reagents", "NovaSeq Reagent Kits v1.5; Flow Cell SP", "NovaSeq Reagent Kits v1.5; Flow Cell SP", "NovaSeq Reagent Kits v1.5; Flow Cell SP", "NovaSeq Reagent Kits v1.5; Flow Cell SP", "NovaSeq Reagent Kits v1.5; Flow Cell S1", "NovaSeq Reagent Kits v1.5; Flow Cell S1", "NovaSeq Reagent Kits v1.5; Flow Cell S1", "NovaSeq Reagent Kits v1.5; Flow Cell S2", "NovaSeq Reagent Kits v1.5; Flow Cell S2", "NovaSeq Reagent Kits v1.5; Flow Cell S2", "NovaSeq Reagent Kits v1.5; Flow Cell S4", "NovaSeq Reagent Kits v1.5; Flow Cell S4", "NovaSeq Reagent Kits v1.5; Flow Cell S4", "Ion 316 Chip v2 BC", "Ion 316 Chip v2 BC", "Ion 318 Chip v2 BC", "Ion 318 Chip v2 BC", "Ion P1 v3 Chip", "Ion 510 Chip", "Ion 510 Chip", "Ion 520 Chip", "Ion 520 Chip", "Ion 530 Chip", "Ion 530 Chip", "Ion 540 Chip"]
const Lanes=["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "4", "4", "4", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
const Source=["https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://emea.illumina.com/systems/sequencing-platforms/miseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.illumina.com/systems/sequencing-platforms/novaseq/specifications.html", "https://www.thermofisher.com/mx/es/home/life-science/sequencing/next-generation-sequencing/ion-torrent-next-generation-sequencing-publications-literature/ion-torrent-next-generation-sequencing-literature.html", "https://www.thermofisher.com/mx/es/home/life-science/sequencing/next-generation-sequencing/ion-torrent-next-generation-sequencing-publications-literature/ion-torrent-next-generation-sequencing-literature.html", "https://www.thermofisher.com/mx/es/home/life-science/sequencing/next-generation-sequencing/ion-torrent-next-generation-sequencing-publications-literature/ion-torrent-next-generation-sequencing-literature.html", "https://www.thermofisher.com/mx/es/home/life-science/sequencing/next-generation-sequencing/ion-torrent-next-generation-sequencing-publications-literature/ion-torrent-next-generation-sequencing-literature.html", "https://www.thermofisher.com/mx/es/home/life-science/sequencing/next-generation-sequencing/ion-torrent-next-generation-sequencing-workflow/ion-torrent-next-generation-sequencing-run-sequence/ion-proton-system-for-next-generation-sequencing/ion-proton-system-specifications.html", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf", "https://www.thermofisher.com/document-connect/document-connect.html?url=https%3A%2F%2Fassets.thermofisher.com%2FTFS-Assets%2FLSG%2FSpecification-Sheets%2FIon-S5-S5XL-SpecSheet.pdf"]