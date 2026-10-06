from typing import Optional

from pydantic import BaseModel, Field


"""
Represents one chunk of text extracted from a research paper.
"""


class DocumentChunk(BaseModel):

    chunk_id: str = Field(
        ...,
        description="Unique identifier for the chunk."
    )

    pmid: Optional[str] = Field(
        default=None,
        description="PubMed identifier of the source paper."
    )

    pmcid: Optional[str] = Field(
        default=None,
        description="PubMed Central identifier of the source paper."
    )

    doi: Optional[str] = Field(
        default=None,
        description="Digital Object Identifier of the source paper."
    )
    
    url: Optional[str] = Field(
        default=None,
        description="Direct URL to the source paper or its Europe PMC record."
    )

    title: Optional[str] = Field(
        default=None,
        description="Title of the source paper."
    )

    journal: Optional[str] = Field(
        default=None,
        description="Journal in which the paper was published."
    )

    publication_year: Optional[int] = Field(
        default=None,
        ge=1800,
        description="Publication year of the source paper."
    )

    authors: list[str] = Field(
        default_factory=list,
        description="Authors of the source paper."
    )

    keywords: list[str] = Field(
        default_factory=list,
        description="Author-provided keywords of the source paper."
    )

    mesh_terms: list[str] = Field(
        default_factory=list,
        description="Medical Subject Headings of the source paper."
    )

    source: str = Field(
        default="Europe PMC",
        description="Source database from which the paper was retrieved."
    )

    open_access: bool = Field(
        default=False,
        description="Indicates whether the full-text paper is available as open access."
    )

    in_pmc: bool = Field(
        default=False,
        description="Indicates whether the paper is available in PubMed Central."
    )

    cited_by_count: int = Field(
        default=0,
        ge=0,
        description="Number of times the paper has been cited according to Europe PMC."
    )

    chunk_index: int = Field(
        ...,
        ge=0,
        description="Position of this chunk within the paper."
    )

    text: str = Field(
        ...,
        min_length=1,
        description="Text content of the chunk."
    )